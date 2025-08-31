$startDate = Get-Date "2020-01-01"
$endDate   = Get-Date "2025-08-31"

$currentDate = $startDate
$rand = New-Object System.Random

while ($currentDate -le $endDate) {

    $doCommitToday = $rand.Next(0, 100) -lt 80
    if ($doCommitToday) {

        $commitsToday = $rand.Next(1, 31)

        for ($i = 0; $i -lt $commitsToday; $i++) {

            $hour = $rand.Next(0, 24)
            $minute = $rand.Next(0, 60)
            $second = $rand.Next(0, 60)

            $dateTime = Get-Date -Year $currentDate.Year -Month $currentDate.Month -Day $currentDate.Day -Hour $hour -Minute $minute -Second $second
            $dateStr = $dateTime.ToString("ddd MMM dd HH:mm:ss yyyy K", [System.Globalization.CultureInfo]::InvariantCulture)

            $env:GIT_AUTHOR_NAME = "Vahe"
            $env:GIT_AUTHOR_EMAIL = "w33bv.gl@gmail.com"
            $env:GIT_COMMITTER_NAME = "Vahe"
            $env:GIT_COMMITTER_EMAIL = "w33bv.gl@gmail.com"
            $env:GIT_AUTHOR_DATE = $dateStr
            $env:GIT_COMMITTER_DATE = $dateStr

            git commit --allow-empty -m "Commit for $($currentDate.ToString("yyyy-MM-dd")) #$i" --date "$dateStr"
        }
    }

    $currentDate = $currentDate.AddDays(1)
}

# Пушим все изменения
git push origin main
